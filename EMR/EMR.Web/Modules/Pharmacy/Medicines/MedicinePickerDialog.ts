
namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MedicinePickerDialog extends Serenity.EntityDialog<Pharmacy.MedicinesRow, any> {
        protected getFormKey() { return MedicinesForm.formKey; }
        protected getIdProperty() { return MedicinesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinesRow.localTextPrefix; }
        protected getNameProperty() { return MedicinesRow.nameProperty; }
        protected getService() { return MedicinesService.baseUrl; }

        protected form = new MedicinesForm(this.idPrefix);

        private checkGrid: MedicineCheckGrid;

        constructor() {
            super();

            this.checkGrid = new MedicineCheckGrid(this.byId("CheckGrid"));
            this.dialogTitle = "Select Medicines";
        }

        protected getTemplate() {
            return `<div id="~_CheckGrid"></div>`;
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.buttons = [
                {
                    text: Q.text("Dialogs.OkButton"),
                    click: () => {
                        var selected = this.checkGrid.selectedItems;
                        if (!selected.length) {
                            Q.notifyWarning("Please select medicine!");
                            return;
                        }

                        if (!this.onSuccess || this.onSuccess(selected))
                            this.dialogClose();
                    }
                },
                {
                    text: Q.text("Dialogs.CancelButton"),
                    click: () => {
                        this.dialogClose();
                    }
                }
            ];
            return opt;
        }

        get selectedItems() {
            return this.checkGrid.selectedItems;
        }
        public onSuccess: (selected: MedicinesRow[]) => boolean;
    }
}