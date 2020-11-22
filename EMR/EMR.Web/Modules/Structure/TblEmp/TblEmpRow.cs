
namespace EMR.Structure.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Structure"), TableName("[dbo].[TblEmp]")]
    [DisplayName("Statff"), InstanceName("Staff")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblEmpRow : Row, IIdRow, INameRow
    {

        [DisplayName("Em Id"), Column("emID"), PrimaryKey]
        public Int32? EmId
        {
            get { return Fields.EmId[this]; }
            set { Fields.EmId[this] = value; }
        }

        [DisplayName("Emp Name"), NotNull, QuickSearch]
        public String EmpName
        {
            get { return Fields.EmpName[this]; }
            set { Fields.EmpName[this] = value; }
        }

        [DisplayName("Emp Name D"), NotNull]
        public String EmpNameD
        {
            get { return Fields.EmpNameD[this]; }
            set { Fields.EmpNameD[this] = value; }
        }

        [DisplayName("Emp Father Name")]
        public String EmpFatherName
        {
            get { return Fields.EmpFatherName[this]; }
            set { Fields.EmpFatherName[this] = value; }
        }

        [DisplayName("Emp Father Name D")]
        public String EmpFatherNameD
        {
            get { return Fields.EmpFatherNameD[this]; }
            set { Fields.EmpFatherNameD[this] = value; }
        }

        [DisplayName("Emp Last Name")]
        public String EmpLastName
        {
            get { return Fields.EmpLastName[this]; }
            set { Fields.EmpLastName[this] = value; }
        }

        [DisplayName("Emp Last Name D")]
        public String EmpLastNameD
        {
            get { return Fields.EmpLastNameD[this]; }
            set { Fields.EmpLastNameD[this] = value; }
        }

        [DisplayName("User Name")]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.EmId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmpName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblEmpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field EmId;

            public StringField EmpName;

            public StringField EmpNameD;

            public StringField EmpFatherName;

            public StringField EmpFatherNameD;

            public StringField EmpLastName;

            public StringField EmpLastNameD;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;


		}
    }
}
