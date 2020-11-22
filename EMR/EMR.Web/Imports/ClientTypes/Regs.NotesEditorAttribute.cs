using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace EMR.Regs
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "EMR.Regs.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

