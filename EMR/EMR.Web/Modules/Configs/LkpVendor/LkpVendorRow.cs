
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpVendor]")]
    [DisplayName("Suppliers"), InstanceName("Supplier")]
    [ReadPermission(PermissionKeys.LkpVendor.View)]
    [ModifyPermission(PermissionKeys.LkpVendor.Update)]
    [InsertPermission(PermissionKeys.LkpVendor.Insert)]
    [DeletePermission(PermissionKeys.LkpVendor.Delete)]
    [LookupScript("Configs.lkpVendor")]
    public sealed class LkpVendorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Vendor Id"), NotNull,Identity]
        public Int32? VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("Vendor Name"), Size(100), NotNull, QuickSearch]
        public String VendorName
        {
            get { return Fields.VendorName[this]; }
            set { Fields.VendorName[this] = value; }
        }

        [DisplayName("Vendor Type"), Size(50), NotNull]
        public String VendorType
        {
            get { return Fields.VendorType[this]; }
            set { Fields.VendorType[this] = value; }
        }

        [DisplayName("Vendor Reg No"), NotNull]
        public Int32? VendorRegNo
        {
            get { return Fields.VendorRegNo[this]; }
            set { Fields.VendorRegNo[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DefaultValue("+93")]
        [MaskedEditor(Mask = "+99-999999999")]
        [DisplayName("Cell Phone No"), Size(50)]
        public String CellPhoneNo
        {
            get { return Fields.CellPhoneNo[this]; }
            set { Fields.CellPhoneNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VendorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VendorName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpVendorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VendorId;
            public StringField VendorName;
            public StringField VendorType;
            public Int32Field VendorRegNo;
            public StringField Email;
            public StringField CellPhoneNo;
        }
    }
}
