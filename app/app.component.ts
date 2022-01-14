import { Component } from '@angular/core';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { filesystem, Entry } from './filesystem';

@Component({
    selector: 'my-app',
    template: `
        <kendo-treelist [kendoTreeListHierarchyBinding]="data" childrenField="contents"
                        kendoTreeListExpandable
                        filterable="menu"
                        [filter]="filter"
                        [height]="800"
                        navigable=True
                        >
            <kendo-treelist-column [expandable]="true" field="name" title="Name" [width]="250">
                <ng-template kendoTreeListCellTemplate let-dataItem>
                    <span class="k-icon k-i-{{ dataItem.type === 'directory' ? 'folder' : 'file' }}"></span>
                    {{ dataItem.name }}
                </ng-template>
            </kendo-treelist-column>
            <kendo-treelist-column field="type" title="Type" [width]="50">
            </kendo-treelist-column>
            <kendo-treelist-column field="size" title="Size" [width]="80" filter="numeric">
            </kendo-treelist-column>
            <kendo-treelist-column field="time" title="Date" [width]="80" filter="numeric">
            </kendo-treelist-column>
        </kendo-treelist>
    `
})
export class AppComponent {
    public filter: CompositeFilterDescriptor = {
        logic: 'and',
        filters: []
    };

    public data: Entry[] = filesystem;
}
