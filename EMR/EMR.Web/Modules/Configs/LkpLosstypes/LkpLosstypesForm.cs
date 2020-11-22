
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpLosstypes")]
    [BasedOnRow(typeof(Entities.LkpLosstypesRow), CheckNames = true)]
    public class LkpLosstypesForm
    {
        public String Name { get; set; }
    }
}