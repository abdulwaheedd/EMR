
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cvisits")]
    [BasedOnRow(typeof(Entities.CvisitsRow), CheckNames = true)]
    public class CvisitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 VisitId { get; set; }
        [Width(130)]
        public DateTime DateOfVisit { get; set; }
        [Width(130)]
        public String SDateOfVisit { get; set; }
        [EditLink]
        [Width(100)]
        public string MRN { get; set; }
        [Width(130)]
        public string OccupationName { get; set; }
        [Width(130)]
        public string MaritalStatusName { get; set; }
        [Width(130)]
        public String PhoneNumber { get; set; }
        [Width(140)]
        public string ProvinceName { get; set; }
        [Width(140)]
        public string DistrictName { get; set; }
        [Width(140)]
        public String Location { get; set; }
        [Width(140)]
        public string Typeofvisit { get; set; }
    }
}