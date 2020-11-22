
namespace EMR.Pharmacy {
    import fld = MedicinesRow.Fields;

    @Serenity.Decorators.registerClass()
    export class MedicinesGrid extends Serenity.EntityGrid<MedicinesRow, any> {
        protected getColumnsKey() { return 'Pharmacy.Medicines'; }
        protected getDialogType() { return MedicinesDialog; }
        protected getIdProperty() { return MedicinesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinesRow.localTextPrefix; }
        protected getService() { return MedicinesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            // adding a specific css class to column, 
            // to be able to format cell with a different background
            Q.first(columns, x => x.field == fld.DaysToExpire).cssClass += " col-expiry-cell";
            Q.first(columns, x => x.field == fld.Balance).cssClass += " col-balance-cell";
            Q.first(columns, x => x.field == fld.QuantityUsed).cssClass += " col-quanity-cell";

            return columns;
        }


        protected getItemCssClass(item: Pharmacy.MedicinesRow, index: number): any {
            let klass: string = "";

            if (item.DaysToExpire <= 0 && item.Balance>0)
                klass += " expired-data";
            else if (item.DaysToExpire<90)
                klass += " nearexpire-data";
            else
                klass += " notexpiring-data";

            if (item.Balance <= 30 && item.Balance>=0)
                klass += " balance-minus";
            else if (item.Balance <0)
                klass += " blance-less-thirty";

            if (item.QuantityUsed > item.Quantity)
                klass += " quantity-used-over";

            return Q.trimToNull(klass);
        }
    }
}