
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CvitalsignsGrid extends Serenity.EntityGrid<CvitalsignsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cvitalsigns'; }
        protected getDialogType() { return CvitalsignsDialog; }
        protected getIdProperty() { return CvitalsignsRow.idProperty; }
        protected getLocalTextPrefix() { return CvitalsignsRow.localTextPrefix; }
        protected getService() { return CvitalsignsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            return buttons;
        }
    }
}