
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpImaging")]
    [BasedOnRow(typeof(Entities.LkpImagingRow), CheckNames = true)]
    public class LkpImagingForm
    {
        public String ImagingName { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}