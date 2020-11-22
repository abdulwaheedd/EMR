
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("OPD.Recommedations")]
    [BasedOnRow(typeof(Entities.RecommedationsRow), CheckNames = true)]
    public class RecommedationsForm
    {
        [ReadOnly(true)]
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(LkpRecommandsRow))]
        public Int32 RecomId { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}