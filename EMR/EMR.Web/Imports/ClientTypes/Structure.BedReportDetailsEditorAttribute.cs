using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace EMR.Structure
{
    public partial class BedReportDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "EMR.Structure.BedReportDetailsEditor";

        public BedReportDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

