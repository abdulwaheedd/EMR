
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[Stages]")]
    [DisplayName("Stages"), InstanceName("Stages")]
    [ReadPermission(PermissionKeys.Stages.View)]
    [ModifyPermission(PermissionKeys.Stages.Update)]
    [DeletePermission(PermissionKeys.Stages.Delete)]
    [InsertPermission(PermissionKeys.Stages.Insert)]
    [LookupScript("Configs.Stages")]
    public sealed class StagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Stage Id"), Identity]
        public Int32? StageId
        {
            get { return Fields.StageId[this]; }
            set { Fields.StageId[this] = value; }
        }

        [DisplayName("Stagename"), Size(50), NotNull, QuickSearch]
        public String Stagename
        {
            get { return Fields.Stagename[this]; }
            set { Fields.Stagename[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Stagename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StageId;
            public StringField Stagename;
        }
    }
}
