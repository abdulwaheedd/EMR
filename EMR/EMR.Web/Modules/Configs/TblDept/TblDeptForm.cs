
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblDept")]
    [BasedOnRow(typeof(Entities.TblDeptRow), CheckNames = true)]
    public class TblDeptForm
    {
        public String DeptName { get; set; }
        public String DeptNameD { get; set; }
    }
}