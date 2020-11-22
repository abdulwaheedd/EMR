
namespace EMR.FM.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FM"), TableName("[dbo].[TblPrintDetails]")]
    [DisplayName("Tbl Print Details"), InstanceName("Tbl Print Details")]
    [ReadPermission(PermissionKeys.TblPrintDetails.View)]
    [ModifyPermission(PermissionKeys.TblPrintDetails.Update)]
    [InsertPermission(PermissionKeys.TblPrintDetails.Insert)]
    [DeletePermission(PermissionKeys.TblPrintDetails.Delete)]
    public sealed class TblPrintDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Print Id"), Identity]
        public Int64? PrintId
        {
            get { return Fields.PrintId[this]; }
            set { Fields.PrintId[this] = value; }
        }

        [DisplayName("Fee Id")]
        public Int64? FeeId
        {
            get { return Fields.FeeId[this]; }
            set { Fields.FeeId[this] = value; }
        }

        [DisplayName("Date Time Printed")]
        public DateTime? DateTimePrinted
        {
            get { return Fields.DateTimePrinted[this]; }
            set { Fields.DateTimePrinted[this] = value; }
        }

        [DisplayName("Printed By"), Size(50), QuickSearch]
        public String PrintedBy
        {
            get { return Fields.PrintedBy[this]; }
            set { Fields.PrintedBy[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.PrintId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PrintedBy; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPrintDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PrintId;
            public Int64Field FeeId;
            public DateTimeField DateTimePrinted;
            public StringField PrintedBy;
        }
    }
}
