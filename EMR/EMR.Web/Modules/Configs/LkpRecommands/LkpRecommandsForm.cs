
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpRecommands")]
    [BasedOnRow(typeof(Entities.LkpRecommandsRow), CheckNames = true)]
    public class LkpRecommandsForm
    {
        public String RecommandName { get; set; }
    }
}