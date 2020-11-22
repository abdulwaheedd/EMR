
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class BedReportDetailsEditor extends Common.GridEditorBase<BedReportDetailsRow> {
        protected getColumnsKey() { return 'Structure.BedReportDetails'; }
        protected getDialogType() { return BedReportDetailsEditorDialog; }
        protected getLocalTextPrefix() { return BedReportDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        // Cluster picker
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: "Select Beds",
                cssClass: "add-button",
                onClick: () => {
                    var dlg = new Configs.TblWardPickerDialog();
                    dlg.onSuccess = (selected) => {
                        // filter already existing products
                        selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.WardId == x.WardId))

                        for (var sel of selected) {
                            var item = <Structure.BedReportDetailsRow>{
                                WardId: sel.WardId,
                            };

                            var id = this.getNextId();
                            item[this.getIdProperty()] = id;
                            this.view.addItem(item);
                        }
                        return true;
                    };
                    dlg.dialogOpen();
                }
            });


            return buttons;
        }
    }
}