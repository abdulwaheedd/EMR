
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpManufacturer]")]
    [DisplayName("Manufacturers"), InstanceName("Manufacturer")]
    [ReadPermission(PermissionKeys.LkpManufacturer.View)]
    [ModifyPermission(PermissionKeys.LkpManufacturer.Update)]
    [InsertPermission(PermissionKeys.LkpManufacturer.Insert)]
    [DeletePermission(PermissionKeys.LkpManufacturer.Delete)]
    [LookupScript("Configs.lkpManufacturer")]
    public sealed class LkpManufacturerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Manufacturer Id"), NotNull]
        public Int32? ManufacturerId
        {
            get { return Fields.ManufacturerId[this]; }
            set { Fields.ManufacturerId[this] = value; }
        }

        [DisplayName("Manufacturer Name"), Size(100), NotNull, QuickSearch]
        public String ManufacturerName
        {
            get { return Fields.ManufacturerName[this]; }
            set { Fields.ManufacturerName[this] = value; }
        }

        [DisplayName("Manufacturer Type"), Size(50), NotNull]
        public String ManufacturerType
        {
            get { return Fields.ManufacturerType[this]; }
            set { Fields.ManufacturerType[this] = value; }
        }

        [LookupEditor(typeof(CountriesRow))]
        [DisplayName("Country Id"), NotNull]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [URLEditor]
        [DisplayName("Website"), Size(200)]
        public String Website
        {
            get { return Fields.Website[this]; }
            set { Fields.Website[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Cell Phone No"), Size(50)]
        public String CellPhoneNo
        {
            get { return Fields.CellPhoneNo[this]; }
            set { Fields.CellPhoneNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ManufacturerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ManufacturerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpManufacturerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ManufacturerId;
            public StringField ManufacturerName;
            public StringField ManufacturerType;
            public Int32Field CountryId;
            public StringField Website;
            public StringField Email;
            public StringField CellPhoneNo;
        }
    }
}
