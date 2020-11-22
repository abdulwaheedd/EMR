
namespace EMR.Structure.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Structure"), TableName("[dbo].[TblDuty]")]
    [DisplayName("Duties"), InstanceName("Duty")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblDutyRow : Row, IIdRow, INameRow
    {

        [DisplayName("Dut Id"), Column("dutID"), PrimaryKey]
        public Int32? DutId
        {
            get { return Fields.DutId[this]; }
            set { Fields.DutId[this] = value; }
        }

        [DisplayName("Emp Id"), Column("empID"), Size(255), NotNull, QuickSearch]
        public String EmpId
        {
            get { return Fields.EmpId[this]; }
            set { Fields.EmpId[this] = value; }
        }

        [DisplayName("Ward Id"), Column("WardID"), NotNull]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }

        [DisplayName("Dut Year"), NotNull]
        public Int32? DutYear
        {
            get { return Fields.DutYear[this]; }
            set { Fields.DutYear[this] = value; }
        }

        [DisplayName("Dut Month"), NotNull]
        public Int32? DutMonth
        {
            get { return Fields.DutMonth[this]; }
            set { Fields.DutMonth[this] = value; }
        }

        [DisplayName("User Name"), Size(255)]
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
            get { return Fields.DutId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmpId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblDutyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field DutId;

            public StringField EmpId;

            public Int32Field WardId;

            public Int32Field DutYear;

            public Int32Field DutMonth;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;


		}
    }
}
