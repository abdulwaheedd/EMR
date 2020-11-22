
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpTypeofvisit]")]
    [DisplayName("Type Of Visit"), InstanceName("Type of visit")]
    [ReadPermission(PermissionKeys.Typeofvisit.View)]
    [ModifyPermission(PermissionKeys.Typeofvisit.Update)]
    [InsertPermission(PermissionKeys.Typeofvisit.Insert)]
    [DeletePermission(PermissionKeys.Typeofvisit.Delete)]
    [LookupScript("Configs.Typeofvisit")]
    public sealed class TypeofvisitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type Of Visit"), Size(50), QuickSearch]
        public String TypeOfVisit
        {
            get { return Fields.TypeOfVisit[this]; }
            set { Fields.TypeOfVisit[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeOfVisit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TypeofvisitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TypeOfVisit;
        }
    }
}
