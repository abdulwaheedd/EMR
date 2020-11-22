
namespace EMR.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[DashboardUrl]")]
    [DisplayName("Dashboard Url"), InstanceName("Dashboard Url")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DashboardUrlRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Url"), Size(300), QuickSearch]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Url; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DashboardUrlRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Url;
            public BooleanField Active;
        }
    }
}
