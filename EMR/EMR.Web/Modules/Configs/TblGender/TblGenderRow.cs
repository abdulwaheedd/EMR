
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblGender]")]
    [DisplayName("Gender"), InstanceName("Gender")]
    [ReadPermission(PermissionKeys.TblGender.View)]
    [ModifyPermission(PermissionKeys.TblGender.Update)]
    [InsertPermission(PermissionKeys.TblGender.Insert)]
    [DeletePermission(PermissionKeys.TblGender.Delete)]
    [LookupScript("Conigs.TblGender")]
    public sealed class TblGenderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Gender Id"), PrimaryKey,NotNull]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Gender (English)"), Size(50),NotNull, QuickSearch]
        public String GenderEng
        {
            get { return Fields.GenderEng[this]; }
            set { Fields.GenderEng[this] = value; }
        }

        [DisplayName("Gender (Dari)"),NotNull, Size(50)]
        public String GenderDa
        {
            get { return Fields.GenderDa[this]; }
            set { Fields.GenderDa[this] = value; }
        }

        [DisplayName("Gender (Pashto)"),NotNull, Size(50)]
        public String GenderPs
        {
            get { return Fields.GenderPs[this]; }
            set { Fields.GenderPs[this] = value; }
        }

        [DisplayName("Gender"), Size(100),Expression("t0.[GenderEng] +' - '+t0.[GenderDa] + ' - '+t0.[GenderPs]")]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GenderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Gender; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblGenderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GenderId;
            public StringField GenderEng;
            public StringField GenderDa;
            public StringField GenderPs;
            public StringField Gender;

        }
    }
}
