
namespace EMR.Locations.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Locations"), TableName("[dbo].[FacilityInfoRefer]")]
    [DisplayName("Facility Info Refer"), InstanceName("Facility Info Refer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Locations.FacilityInfoRefer")]
    public sealed class FacilityInfoReferRow : Row, IIdRow, INameRow
    {
        [DisplayName("Facility Id"), Column("FacilityID"), NotNull]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Facility Name"), Size(255), NotNull, QuickSearch]
        public String FacilityName
        {
            get { return Fields.FacilityName[this]; }
            set { Fields.FacilityName[this] = value; }
        }

        [DisplayName("Facility Name Dari"), Size(255)]
        public String FacilityNameDari
        {
            get { return Fields.FacilityNameDari[this]; }
            set { Fields.FacilityNameDari[this] = value; }
        }

        [DisplayName("Facility Name Pashto"), Size(255)]
        public String FacilityNamePashto
        {
            get { return Fields.FacilityNamePashto[this]; }
            set { Fields.FacilityNamePashto[this] = value; }
        }

        [DisplayName("Facility Full Name"), Size(511)]
        public String FacilityFullName
        {
            get { return Fields.FacilityFullName[this]; }
            set { Fields.FacilityFullName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FacilityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FacilityFullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FacilityInfoReferRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FacilityId;
            public StringField FacilityName;
            public StringField FacilityNameDari;
            public StringField FacilityNamePashto;
            public StringField FacilityFullName;
        }
    }
}
