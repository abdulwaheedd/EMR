
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblOccupation]")]
    [DisplayName("Occupation"), InstanceName("Occupation")]
    [ReadPermission(PermissionKeys.TblOccupation.View)]
    [ModifyPermission(PermissionKeys.TblOccupation.Update)]
    [InsertPermission(PermissionKeys.TblOccupation.Insert)]
    [DeletePermission(PermissionKeys.TblOccupation.Delete)]
    [LookupScript("Configs.TblOccupation")]
    public sealed class TblOccupationRow : Row, IIdRow, INameRow
    {

        [DisplayName("OccupatonId"), Column("OID"), PrimaryKey]
        public Int32? Oid
        {
            get { return Fields.Oid[this]; }
            set { Fields.Oid[this] = value; }
        }

        [DisplayName("Occupation (Dari)"), Size(50), NotNull, QuickSearch]
        public String OccupationDari
        {
            get { return Fields.OccupationDari[this]; }
            set { Fields.OccupationDari[this] = value; }
        }

        [DisplayName("Occupation (English)"), Size(50), NotNull]
        public String OccupationEng
        {
            get { return Fields.OccupationEng[this]; }
            set { Fields.OccupationEng[this] = value; }
        }
        
        [DisplayName("OccupationName"), Expression("t0.[OccupationEng]+' - '+t0.[OccupationDari]")]
        public String OccupationName
        {
            get { return Fields.OccupationName[this]; }
            set { Fields.OccupationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Oid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OccupationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblOccupationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;

            public StringField OccupationDari;

            public StringField OccupationEng;
            public StringField OccupationName;
		}
    }
}
