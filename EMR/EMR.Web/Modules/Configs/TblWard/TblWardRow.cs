
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblWard]")]
    [DisplayName("Wards"), InstanceName("Ward")]
    [ReadPermission(PermissionKeys.TblWard.View)]
    [ModifyPermission(PermissionKeys.TblWard.Update)]
    [InsertPermission(PermissionKeys.TblWard.Insert)]
    [DeletePermission(PermissionKeys.TblWard.Delete)]
    [LookupScript("Configs.TblWard")]
    public sealed class TblWardRow : Row, IIdRow, INameRow
    {

        [DisplayName("Ward Id"), Column("WardID"), Identity]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }

        [DisplayName("Ward Name (English)"), Size(255), NotNull, QuickSearch]
        public String WardName
        {
            get { return Fields.WardName[this]; }
            set { Fields.WardName[this] = value; }
        }

        [DisplayName("Ward Name (Dari)"), Size(255), NotNull,QuickSearch]
        public String WardNameD
        {
            get { return Fields.WardNameD[this]; }
            set { Fields.WardNameD[this] = value; }
        }

        [DisplayName("Number of Beds")]
        public Int32? WardNumBeds
        {
            get { return Fields.WardNumBeds[this]; }
            set { Fields.WardNumBeds[this] = value; }
        }
        
        [DisplayName("Ward Name"),Expression("t0.[WardName]+' - '+t0.[WardNameD]")]
        public String Ward
        {
            get { return Fields.Ward[this]; }
            set { Fields.Ward[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WardId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Ward; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblWardRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field WardId;

            public StringField WardName;

            public StringField WardNameD;

            public Int32Field WardNumBeds;
            public StringField Ward;

		}
    }
}
