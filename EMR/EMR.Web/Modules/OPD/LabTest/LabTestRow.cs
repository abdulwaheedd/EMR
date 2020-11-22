
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[LabTest]")]
    [DisplayName("Lab Test"), InstanceName("Test")]
    [ReadPermission(PermissionKeys.LabTest.View)]
    [ModifyPermission(PermissionKeys.LabTest.Update)]
    [InsertPermission(PermissionKeys.LabTest.Insert)]
    [DeletePermission(PermissionKeys.LabTest.Delete)]
    public sealed class LabTestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Visit"), NotNull, ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit"), TextualField("VisitPhoneNumber")]
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

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        [DisplayName("Visit Mrid"), Expression("jVisit.[MRID]")]
        public Int64? VisitMrid
        {
            get { return Fields.VisitMrid[this]; }
            set { Fields.VisitMrid[this] = value; }
        }
        [DisplayName("Test"), Expression("jLabTest.[LabTestName]"), QuickSearch]
        public String LabTestName
        {
            get { return Fields.LabTestName[this]; }
            set { Fields.LabTestName[this] = value; }
        }

        [DisplayName("Test Time")]
        public DateTime? LabDateTime
        {
            get { return Fields.LabDateTime[this]; }
            set { Fields.LabDateTime[this] = value; }
        }
        [DisplayName("Test Type"), ForeignKey("[dbo].[LkpTestTypes]", "TestTypeId"), LeftJoin("jTestType")]
        public Int32? TestTypeId
        {
            get { return Fields.TestTypeId[this]; }
            set { Fields.TestTypeId[this] = value; }
        }

        [DisplayName("Test Date (Shamsi)")]
        public String SlabDate
        {
            get { return Fields.SlabDate[this]; }
            set { Fields.SlabDate[this] = value; }
        }

        [DisplayName("Test Type"), Expression("jTestType.[TestTypeName]"), QuickSearch]
        public String TestTypeName
        {
            get { return Fields.TestTypeName[this]; }
            set { Fields.TestTypeName[this] = value; }
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

        public LabTestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field VisitId;
            public Int32Field LabTestId;
            public StringField Result;
            public StringField NormalRange;
            public StringField Unit;
            public Int32Field UserId;
            public DateTimeField Updated;
            public DateTimeField LabDateTime;
            public StringField SlabDate;
            public Int32Field TestTypeId;

            public Int64Field VisitMrid;

            public StringField LabTestName;
            public StringField TestTypeName;

        }
    }
}
