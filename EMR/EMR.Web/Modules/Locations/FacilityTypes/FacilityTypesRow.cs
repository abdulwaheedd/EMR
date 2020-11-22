
namespace EMR.Locations.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Locations"), TableName("[dbo].[FacilityTypes]")]
    [DisplayName("Facility Types"), InstanceName("Facility Types")]
    [ReadPermission(PermissionKeys.FacilityTypes.View)]
    [ModifyPermission(PermissionKeys.FacilityTypes.Update)]
    [InsertPermission(PermissionKeys.FacilityTypes.Insert)]
    [DeletePermission(PermissionKeys.FacilityTypes.Delete)]
    [LookupScript("Locations.FacilityTypes")]
    public sealed class FacilityTypesRow : Row, IIdRow, INameRow
    {

        [DisplayName("Type Code"), PrimaryKey]
        public Int32? FacTypeCode
        {
            get { return Fields.FacTypeCode[this]; }
            set { Fields.FacTypeCode[this] = value; }
        }

        [DisplayName("Type Name (English)"),NotNull, Size(50), QuickSearch]
        public String FacType
        {
            get { return Fields.FacType[this]; }
            set { Fields.FacType[this] = value; }
        }

        [DisplayName("Type Name (Dari)"),NotNull, Size(50)]
        public String FacTypeDari
        {
            get { return Fields.FacTypeDari[this]; }
            set { Fields.FacTypeDari[this] = value; }
        }

        [DisplayName("Type Name (Pashto)"),NotNull, Size(50)]
        public String FacTypePashto
        {
            get { return Fields.FacTypePashto[this]; }
            set { Fields.FacTypePashto[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.FacTypeCode; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FacType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FacilityTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field FacTypeCode;

            public StringField FacType;

            public StringField FacTypeDari;

            public StringField FacTypePashto;


		}
    }
}
