
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.Caretypes")]
    [BasedOnRow(typeof(Entities.CaretypesRow), CheckNames = true)]
    public class CaretypesForm
    {
        public String Caretype { get; set; }
    }
}