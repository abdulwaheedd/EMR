using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace EMR.Common
{
    public partial class ShamsiDatePickerEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "EMR.Common.ShamsiDatePickerEditor";

        public ShamsiDatePickerEditorAttribute()
            : base(Key)
        {
        }
    }
}

