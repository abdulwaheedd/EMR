
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

    [FormScript("Configs.TblExaminationsDetails")]
    [BasedOnRow(typeof(Entities.TblExaminationsDetailsRow), CheckNames = true)]
    public class TblExaminationsDetailsForm
    {
        [LookupEditor(typeof(TblDeptRow))]
        public Int32 DpId { get; set; }
        public String EdName { get; set; }
    }
}