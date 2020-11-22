
namespace EMR.Structure.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Structure.TblEmp")]
    [BasedOnRow(typeof(Entities.TblEmpRow), CheckNames = true)]
    public class TblEmpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmId { get; set; }
        [EditLink]
        public String EmpName { get; set; }
        public String EmpNameD { get; set; }
        public String EmpFatherName { get; set; }
        public String EmpFatherNameD { get; set; }
        public String EmpLastName { get; set; }
        public String EmpLastNameD { get; set; }
        public String UserName { get; set; }
        public DateTime LastUpdated { get; set; }
        public Int32 TenantId { get; set; }
    }
}