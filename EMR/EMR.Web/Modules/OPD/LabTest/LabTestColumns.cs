﻿
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.LabTest")]
    [BasedOnRow(typeof(Entities.LabTestRow), CheckNames = true)]
    public class LabTestColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int64 Id { get; set; }
        [Width(140)]
        public string TestTypeName { get; set; }
        [EditLink]
        [Width(200)]
        public string LabTestName { get; set; }
        [Width(100)]
        public String Result { get; set; }
        [Width(200)]
        public String NormalRange { get; set; }
        [Width(130)]
        public String Unit { get; set; }
        [Width(130)]
        [DateTimeEditor]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime LabDateTime { get; set; }
        [Width(130)]
        public String SlabDate { get; set; }
    }
}