
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpHistory]")]
    [DisplayName("History List"), InstanceName("History")]
    [ReadPermission(PermissionKeys.LkpHistory.View)]
    [ModifyPermission(PermissionKeys.LkpHistory.Update)]
    [InsertPermission(PermissionKeys.LkpHistory.Insert)]
    [DeletePermission(PermissionKeys.LkpHistory.Delete)]
    [LookupScript("Configs.lkpHistory")]
    public sealed class LkpHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("History Id"), NotNull]
        public Int32? HistoryId
        {
            get { return Fields.HistoryId[this]; }
            set { Fields.HistoryId[this] = value; }
        }

        [DisplayName("History Name"), Size(200), NotNull, QuickSearch]
        public String HistoryName
        {
            get { return Fields.HistoryName[this]; }
            set { Fields.HistoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.HistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.HistoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field HistoryId;
            public StringField HistoryName;
        }
    }
}
