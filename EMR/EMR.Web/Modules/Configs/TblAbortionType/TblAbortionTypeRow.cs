
namespace EMR.Configs.Entities
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblAbortionType]")]
    [DisplayName("Abortion Types"), InstanceName("Abortion Type")]
    [ReadPermission(PermissionKeys.TblAbortionType.View)]
    [ModifyPermission(PermissionKeys.TblAbortionType.Update)]
    [DeletePermission(PermissionKeys.TblAbortionType.Delete)]
    [InsertPermission(PermissionKeys.TblAbortionType.Insert)]
    [LookupScript("Configs.TblAbortionType")]
    public sealed class TblAbortionTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Abortion Id"), Identity]
        public Int32? AbortionId
        {
            get { return Fields.AbortionId[this]; }
            set { Fields.AbortionId[this] = value; }
        }

        [DisplayName("Abortion Type (Dari)"),NotNull, Size(50), QuickSearch]
        public String AbortionTypeDari
        {
            get { return Fields.AbortionTypeDari[this]; }
            set { Fields.AbortionTypeDari[this] = value; }
        }

        [DisplayName("Abortion Type (Pashto)"),NotNull, Size(50)]
        public String AbortionTypePashto
        {
            get { return Fields.AbortionTypePashto[this]; }
            set { Fields.AbortionTypePashto[this] = value; }
        }

        [DisplayName("Abortion Type (English)"),NotNull, Size(50)]
        public String AbortionTypeEn
        {
            get { return Fields.AbortionTypeEn[this]; }
            set { Fields.AbortionTypeEn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AbortionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AbortionTypeDari; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblAbortionTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AbortionId;
            public StringField AbortionTypeDari;
            public StringField AbortionTypePashto;
            public StringField AbortionTypeEn;
        }
    }
}
