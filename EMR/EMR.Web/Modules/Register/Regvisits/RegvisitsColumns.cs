
namespace EMR.Register.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Register.Regvisits")]
    [BasedOnRow(typeof(Entities.RegvisitsRow), CheckNames = true)]
    public class RegvisitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int64 VisitId { get; set; }
        [EditLink]
        [Width(100)]
        public string MRN { get; set; }
        [Width(140)]
        public string OccupationName { get; set; }
        [Width(130)]
        public string MaritalStatusName { get; set; }
        [Width(130)]
        public DateTime DateOfVisit { get; set; }
        [Width(130)]
        public String SDateOfVisit { get; set; }
        [Width(130)]
        public String PhoneNumber { get; set; }
        [Width(140)]
        public string ProvinceName { get; set; }
        [Width(140)]
        public string DistrictName { get; set; }
        [Width(200)]
        public String Location { get; set; }
        [Width(140)]
        public string Typeofvisit { get; set; }
    }
}