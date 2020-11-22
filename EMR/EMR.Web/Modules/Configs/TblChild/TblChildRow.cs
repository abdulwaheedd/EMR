
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblChild]")]
    [DisplayName("Children"), InstanceName("Child")]
    [ReadPermission(PermissionKeys.TblChild.View)]
    [ModifyPermission(PermissionKeys.TblChild.Update)]
    [InsertPermission(PermissionKeys.TblChild.Insert)]
    [DeletePermission(PermissionKeys.TblChild.Delete)]
    [LookupScript("Configs.TblChild")]
    public sealed class TblChildRow : Row, IIdRow, INameRow
    {
        [DisplayName("Child Id"), PrimaryKey]
        public Int32? ChildId
        {
            get { return Fields.ChildId[this]; }
            set { Fields.ChildId[this] = value; }
        }

        [DisplayName("Child Dari"), Size(50), QuickSearch]
        public String ChildDari
        {
            get { return Fields.ChildDari[this]; }
            set { Fields.ChildDari[this] = value; }
        }

        [DisplayName("Child Pashto"), Size(50)]
        public String ChildPashto
        {
            get { return Fields.ChildPashto[this]; }
            set { Fields.ChildPashto[this] = value; }
        }

        [DisplayName("Child En"), Size(50)]
        public String ChildEn
        {
            get { return Fields.ChildEn[this]; }
            set { Fields.ChildEn[this] = value; }
        }

        [DisplayName("Which child"), Size(100),Expression("t0.[ChildEn] +' - '+t0.[ChildDari]")]
        public String NbChild
        {
            get { return Fields.NbChild[this]; }
            set { Fields.NbChild[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ChildId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NbChild; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblChildRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ChildId;
            public StringField ChildDari;
            public StringField ChildPashto;
            public StringField ChildEn;
            public StringField NbChild;
        }
    }
}
