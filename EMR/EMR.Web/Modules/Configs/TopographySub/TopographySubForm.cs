
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Configs.TopographySub")]
    [BasedOnRow(typeof(Entities.TopographySubRow), CheckNames = true)]
    public class TopographySubForm
    {
        public Int32 Icd0Code { get; set; }
        public String TopographySName { get; set; }
        [LookupEditor(typeof(TopographyMainRow))]
        public Int32 TopomainId { get; set; }
    }
}