
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblPatients")]
    [BasedOnRow(typeof(Entities.TblPatientsRow), CheckNames = true)]
    public class TblPatientsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Width(130)]
        public Int64 Mrid { get; set; }
        [Width(150)]
        public string MRN { get; set; }
        [Width(100)]
        public Int32? FacilityId { get; set; }
        [Width(200)]
        public String FacilityFacilityNameDari { get; set; }
        public String PatName { get; set; }
        public String PatFatName { get; set; }
        public String Gender { get; set; }
        public String PatTazkera { get; set; }
        [Width(120)]
        public string BloodGroup { get; set; }
        [Width(120)]
        public String PatRealationName { get; set; }
        public String UserName { get; set; }
    }
}