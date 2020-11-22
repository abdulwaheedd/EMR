
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpLabTest]")]
    [DisplayName("Tests"), InstanceName("Test")]
    [ReadPermission(PermissionKeys.LkpLabTest.View)]
    [ModifyPermission(PermissionKeys.LkpLabTest.Update)]
    [InsertPermission(PermissionKeys.LkpLabTest.Insert)]
    [DeletePermission(PermissionKeys.LkpLabTest.Delete)]
    [LookupScript("Configs.lkpLabTest")]
    public sealed class LkpLabTestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Lab Test Id"), NotNull,Identity,PrimaryKey]
        public Int32? LabTestId
        {
            get { return Fields.LabTestId[this]; }
            set { Fields.LabTestId[this] = value; }
        }

        [DisplayName("Lab Test Name"), Size(200), QuickSearch,NotNull]
        public String LabTestName
        {
            get { return Fields.LabTestName[this]; }
            set { Fields.LabTestName[this] = value; }
        }

        [DisplayName("Test Types"), Column("SubTypeTestId"), NotNull, ForeignKey("[dbo].[LkpTestTypes]", "TestTypeId"), LookupInclude, LeftJoin("jTestTypes")]
        public Int32? SubTypeTestId
        {
            get { return Fields.SubTypeTestId[this]; }
            set { Fields.SubTypeTestId[this] = value; }
        }

        [DisplayName("Normal Range"), Size(50)]
        public String NormalRange
        {
            get { return Fields.NormalRange[this]; }
            set { Fields.NormalRange[this] = value; }
        }

        [DisplayName("Test Price")]
        public Double? TestPrice
        {
            get { return Fields.TestPrice[this]; }
            set { Fields.TestPrice[this] = value; }
        }

        [DisplayName("Unit"), Size(50)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }
        
        [DisplayName("Test Type"), Size(50)]
        [Expression("jTestTypes.[TestTypeName]")]
        public String TestTypeName
        {
            get { return Fields.TestTypeName[this]; }
            set { Fields.TestTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LabTestId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LabTestName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpLabTestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LabTestId;
            public StringField LabTestName;
            public Int32Field SubTypeTestId;
            public StringField NormalRange;
            public DoubleField TestPrice;
            public StringField Unit;

            public StringField TestTypeName;
        }
    }
}
