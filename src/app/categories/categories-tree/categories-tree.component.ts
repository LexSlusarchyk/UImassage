import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {CategoriesService} from '../categories.service';
import {CreateCategoryModalComponent} from '../../dashboard/modals/create-category-modal/create-category-modal.component';
import {MatDialog} from '@angular/material/dialog';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface CategoryNode {
  id: number;
  title: string;
  children?: CategoryNode[];
  parent_id?: number;
}

/** Flat node with expandable and level information */
interface CategoryFlatNode {
  expandable: boolean;
  title: string;
  level: number;
}

@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent {
  private _transformer = (node: CategoryNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      level: level,
      id: node.id,
      parentId: node.parent_id
    };
  }
  treeControl = new FlatTreeControl<CategoryFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private categoriesService: CategoriesService,
              public dialog: MatDialog) {
    this.categoriesService.categoriesTreeReady$.subscribe((categoriesTree) => {
      this.dataSource.data = categoriesTree;
      this.treeControl.expandAll();
    });
    this.categoriesService.categoriesUpdated$.subscribe(() => {
      this.categoriesService.getCategoriesTree();
    });
    this.categoriesService.getCategoriesTree();
  }

  hasChild = (_: number, node: CategoryFlatNode) => node.expandable;

  selectCategory(node) {
    this.treeControl.collapseAll();
  }

  addCategory(parent) {
    this.showCreateModal(parent);
  }

  showCreateModal(parent) {
    const dialogRef = this.dialog.open(CreateCategoryModalComponent, {
      width: '900px',
      data: { parentId: parent.id },
    });
  }

  editCategory(category) {
    this.showEditModal(category);
  }

  deleteCategory(id) {
    this.categoriesService.deleteItem(id);
  }

  showEditModal(category?) {
    const dialogRef = this.dialog.open(CreateCategoryModalComponent, {
      width: '900px',
      data: { category: category },
    });
  }
}
