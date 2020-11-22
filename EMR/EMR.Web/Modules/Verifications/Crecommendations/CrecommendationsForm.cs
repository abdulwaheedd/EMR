
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Verifications.Crecommendations")]
    [BasedOnRow(typeof(Entities.CrecommendationsRow), CheckNames = true)]
    public class CrecommendationsForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(LkpRecommandsRow))]
        public Int32 RecomId { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}