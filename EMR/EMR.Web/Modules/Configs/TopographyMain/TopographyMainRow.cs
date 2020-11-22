
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TopographyMain]")]
    [DisplayName("Topography Main"), InstanceName("Topography Main")]
    [LookupScript("Configs.TopographyMain")]
    [ReadPermission(PermissionKeys.TopographyMain.View)]
    [ModifyPermission(PermissionKeys.TopographyMain.Update)]
    [InsertPermission(PermissionKeys.TopographyMain.Insert)]
    [DeletePermission(PermissionKeys.TopographyMain.Delete)]
    public sealed class TopographyMainRow : Row, IIdRow, INameRow
    {
        [DisplayName("Topomain Id"), Identity]
        public Int32? TopomainId
        {
            get { return Fields.TopomainId[this]; }
            set { Fields.TopomainId[this] = value; }
        }

        [DisplayName("Topography M Name"), Size(255), NotNull, QuickSearch]
        public String TopographyMName
        {
            get { return Fields.TopographyMName[this]; }
            set { Fields.TopographyMName[this] = value; }
        }

        [DisplayName("Icd0 Code"), Column("ICD0Code"), Size(255), NotNull]
        public String Icd0Code
        {
            get { return Fields.Icd0Code[this]; }
            set { Fields.Icd0Code[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TopomainId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TopographyMName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TopographyMainRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TopomainId;
            public StringField TopographyMName;
            public StringField Icd0Code;
        }
    }
}
