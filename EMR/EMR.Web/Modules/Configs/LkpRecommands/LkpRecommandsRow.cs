
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpRecommands]")]
    [DisplayName("Recommandations"), InstanceName("Recommandation")]
    [ReadPermission(PermissionKeys.LkpRecommands.View)]
    [ModifyPermission(PermissionKeys.LkpRecommands.Update)]
    [InsertPermission(PermissionKeys.LkpRecommands.Insert)]
    [DeletePermission(PermissionKeys.LkpRecommands.Delete)]
    [LookupScript("Configs.lkpRecommands")]
    public sealed class LkpRecommandsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Recom Id"), Identity]
        public Int32? RecomId
        {
            get { return Fields.RecomId[this]; }
            set { Fields.RecomId[this] = value; }
        }

        [DisplayName("Recommand Name"), Size(250), NotNull, QuickSearch]
        public String RecommandName
        {
            get { return Fields.RecommandName[this]; }
            set { Fields.RecommandName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RecomId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RecommandName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpRecommandsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RecomId;
            public StringField RecommandName;
        }
    }
}
