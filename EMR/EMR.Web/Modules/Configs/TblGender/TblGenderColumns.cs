
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblGender")]
    [BasedOnRow(typeof(Entities.TblGenderRow), CheckNames = true)]
    public class TblGenderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 GenderId { get; set; }
        public String GenderEng { get; set; }
        public String GenderDa { get; set; }
        public String GenderPs { get; set; }
        [Width(200)]
        public String Gender { get; set; }
    }
}