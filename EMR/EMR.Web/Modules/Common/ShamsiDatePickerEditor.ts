
namespace EMR.Common {
    @Serenity.Decorators.element("<div style='display: flex' />")
    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    export class ShamsiDatePickerEditor extends Serenity.Widget<any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        constructor(container: JQuery) {
            super(container);

            this.updateElementContent();
        }

        private updateElementContent() {
            var divID = this.element.attr('id');
            var inputID = 'shspkr' + this.uniqueName;

            this.element.append('<input type="text" class="editor flexify" id="' + inputID + '" /><span class="fa fa-calendar fa-lg" style="padding-top: 5px; padding-left: 3px; border-radius: 4px"><i></i></span>');

            this.element.append(
                "<script>" +
                "$('#" + divID + "').MdPersianDateTimePicker({" +
                "TargetSelector: '#shspkr" + this.uniqueName + "'," +
                "EnglishNumber: true"+
                "});" +
                "</script>"
            );
        }

        public get value(): string {
            return $('#shspkr' + this.uniqueName).val();
        }

        public set value(value: string) {
            if (value != undefined) {
                var pick = this.element.data('MdPersianDateTimePicker');
                $('#shspkr' + this.uniqueName).val(value || '');
                //pick.update();
            }
        }

        public getEditValue(property, target) {
            target[property.name] = this.value;
        }

        public setEditValue(source, property) {
            this.value = source[property.name];
        }
    }
}