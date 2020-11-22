
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Clabtests]")]
    [DisplayName("Lab Tests"), InstanceName("Lab Test")]
    [ReadPermission(PermissionKeys.Clabtests.View)]
    public sealed class ClabtestsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Mrid"), Column("MRID"), NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Test"), NotNull, ForeignKey("[dbo].[lkpLabTest]", "LabTestId"), LeftJoin("jLabTest")]
        public Int32? LabTestId
        {
            get { return Fields.LabTestId[this]; }
            set { Fields.LabTestId[this] = value; }
        }

        [DisplayName("Result"), Size(200), QuickSearch]
        public String Result
        {
            get { return Fields.Result[this]; }
            set { Fields.Result[this] = value; }
        }

        [DisplayName("Normal Range"), Size(50)]
        public String NormalRange
        {
            get { return Fields.NormalRange[this]; }
            set { Fields.NormalRange[this] = value; }
        }

        [DisplayName("Unit"), Size(50)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Test Date (m)")]
        public DateTime? LabDateTime
        {
            get { return Fields.LabDateTime[this]; }
            set { Fields.LabDateTime[this] = value; }
        }

        [DisplayName("Test Date (s)"), Size(50)]
        public String SlabDate
        {
            get { return Fields.SlabDate[this]; }
            set { Fields.SlabDate[this] = value; }
        }

        [DisplayName("Visit Date (m)"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Visit Date (s)"), Size(50)]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }
        [DisplayName("Test"), Expression("jLabTest.[LabTestName]"), QuickSearch]
        public String LabTestName
        {
            get { return Fields.LabTestName[this]; }
            set { Fields.LabTestName[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Result; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClabtestsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public Int32Field LabTestId;
            public StringField Result;
            public StringField NormalRange;
            public StringField Unit;
            public DateTimeField LabDateTime;
            public StringField SlabDate;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;

            public StringField LabTestName;
        }
    }
}
