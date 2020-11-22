
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TblWardPickerDialog extends Serenity.EntityDialog<Configs.TblWardRow, any> {
        protected getFormKey() { return TblWardForm.formKey; }
        protected getIdProperty() { return TblWardRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardRow.localTextPrefix; }
        protected getNameProperty() { return TblWardRow.nameProperty; }
        protected getService() { return TblWardService.baseUrl; }

        protected form = new TblWardForm(this.idPrefix);

        private checkGrid: TblWardCheckGrid;

        constructor() {
            super();

            this.checkGrid = new TblWardCheckGrid(this.byId("CheckGrid"));
            this.dialogTitle = "Select Wards";
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
                            Q.notifyWarning("Please select ward!");
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
        public onSuccess: (selected: TblWardRow[]) => boolean;
    }
}