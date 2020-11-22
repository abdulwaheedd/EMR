
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblCaseTypes]")]
    [DisplayName("Case Types"), InstanceName("Case Type")]
    [ReadPermission(PermissionKeys.TblCaseTypes.View)]
    [ModifyPermission(PermissionKeys.TblCaseTypes.Update)]
    [InsertPermission(PermissionKeys.TblCaseTypes.Insert)]
    [DeletePermission(PermissionKeys.TblCaseTypes.Delete)]
    [LookupScript("Configs.TblCaseTypes")]
    public sealed class TblCaseTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Case Id"), PrimaryKey]
        public Int32? CaseId
        {
            get { return Fields.CaseId[this]; }
            set { Fields.CaseId[this] = value; }
        }

        [DisplayName("Casetype En"), Size(50),NotNull, QuickSearch]
        public String CasetypeEn
        {
            get { return Fields.CasetypeEn[this]; }
            set { Fields.CasetypeEn[this] = value; }
        }

        [DisplayName("Casetype Dari"),NotNull, Size(50)]
        public String CasetypeDari
        {
            get { return Fields.CasetypeDari[this]; }
            set { Fields.CasetypeDari[this] = value; }
        }

        [DisplayName("Casetype Pashto"),NotNull, Size(50)]
        public String CasetypePashto
        {
            get { return Fields.CasetypePashto[this]; }
            set { Fields.CasetypePashto[this] = value; }
        }
        
        [DisplayName("Casetype name"),Expression("t0.[CasetypeEn]+' - '+t0.[CasetypeDari]+' - '+t0.[CasetypePashto]")]
        public String CaseTypeName
        {
            get { return Fields.CaseTypeName[this]; }
            set { Fields.CaseTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CaseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CaseTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblCaseTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CaseId;
            public StringField CasetypeEn;
            public StringField CasetypeDari;
            public StringField CasetypePashto;
            public StringField CaseTypeName;
        }
    }
}
