
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblAgeTypes]")]
    [DisplayName("Age Types"), InstanceName("Age Type")]
    [ReadPermission(PermissionKeys.TblAgeTypes.View)]
    [ModifyPermission(PermissionKeys.TblAgeTypes.Update)]
    [InsertPermission(PermissionKeys.TblAgeTypes.Insert)]
    [DeletePermission(PermissionKeys.TblAgeTypes.Delete)]
    [LookupScript("Configs.TblAgeTypes")]
    public sealed class TblAgeTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Agetype Id"), PrimaryKey]
        public Int32? AgetypeId
        {
            get { return Fields.AgetypeId[this]; }
            set { Fields.AgetypeId[this] = value; }
        }

        [DisplayName("Age Type Name En"), Size(50), QuickSearch]
        public String AgeTypeNameEn
        {
            get { return Fields.AgeTypeNameEn[this]; }
            set { Fields.AgeTypeNameEn[this] = value; }
        }

        [DisplayName("Age Type Name Dari"), Size(50)]
        public String AgeTypeNameDari
        {
            get { return Fields.AgeTypeNameDari[this]; }
            set { Fields.AgeTypeNameDari[this] = value; }
        }

        [DisplayName("Age Type Name Pashto"), Size(50)]
        public String AgeTypeNamePashto
        {
            get { return Fields.AgeTypeNamePashto[this]; }
            set { Fields.AgeTypeNamePashto[this] = value; }
        }
        
        [DisplayName("Age Type"),Expression("t0.[AgeTypeNameEn]+' - '+t0.[AgeTypeNameDari]+' - '+t0.[AgeTypeNamePashto]")]
        public String AgeTypeName
        {
            get { return Fields.AgeTypeName[this]; }
            set { Fields.AgeTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgetypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AgeTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblAgeTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgetypeId;
            public StringField AgeTypeNameEn;
            public StringField AgeTypeNameDari;
            public StringField AgeTypeNamePashto;
            public StringField AgeTypeName;
        }
    }
}
