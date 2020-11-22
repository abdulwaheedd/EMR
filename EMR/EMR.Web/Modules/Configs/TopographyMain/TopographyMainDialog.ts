
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TopographyMainDialog extends Serenity.EntityDialog<TopographyMainRow, any> {
        protected getFormKey() { return TopographyMainForm.formKey; }
        protected getIdProperty() { return TopographyMainRow.idProperty; }
        protected getLocalTextPrefix() { return TopographyMainRow.localTextPrefix; }
        protected getNameProperty() { return TopographyMainRow.nameProperty; }
        protected getService() { return TopographyMainService.baseUrl; }

        protected form = new TopographyMainForm(this.idPrefix);

    }
}