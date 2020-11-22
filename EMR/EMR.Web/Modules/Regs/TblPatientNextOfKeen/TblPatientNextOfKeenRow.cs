
namespace EMR.Regs.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblPatientNextOfKeen]")]
    [DisplayName("Next Of Keen"), InstanceName("Next Of Keen")]
    [ReadPermission(PermissionKeys.TblPatientNextOfKeen.View)]
    [ModifyPermission(PermissionKeys.TblPatientNextOfKeen.Update)]
    [InsertPermission(PermissionKeys.TblPatientNextOfKeen.Insert)]
    [DeletePermission(PermissionKeys.TblPatientNextOfKeen.Delete)]
    public sealed class TblPatientNextOfKeenRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("ID"), Column("PatNoKID"), Identity]
        public Int32? PatNoKid
        {
            get { return Fields.PatNoKid[this]; }
            set { Fields.PatNoKid[this] = value; }
        }

        [DisplayName("Next-of-Keen Name"),NotNull, Size(255), QuickSearch]
        public String NoKNameD
        {
            get { return Fields.NoKNameD[this]; }
            set { Fields.NoKNameD[this] = value; }
        }

        [DisplayName("MRID"), Column("MRID"), ForeignKey("[dbo].[TblPatients]", "MRID"), LeftJoin("jMrid"), TextualField("MridPatName")]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Expression("jMrid.[MRN]")]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }

        [DisplayName("Next-Of-Keen Phone"), Size(255)]
        public String NoKPhone
        {
            get { return Fields.NoKPhone[this]; }
            set { Fields.NoKPhone[this] = value; }
        }

        [ForeignKey("[dbo].[TblRelation]", "RelationId"), LeftJoin("jRelation")]

        [DisplayName("Next-Of-Keen Relation"),NotNull, Size(255)]
        public Int32? NoKRelationType
        {
            get { return Fields.NoKRelationType[this]; }
            set { Fields.NoKRelationType[this] = value; }
        }

        [DisplayName("Next-Of-Keen Address"),NotNull, Size(255)]
        public String NoKAdd
        {
            get { return Fields.NoKAdd[this]; }
            set { Fields.NoKAdd[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("User Name"), Size(50)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }


        [DisplayName("Mrid Facility Id"), Expression("jMrid.[FacilityID]")]
        public Int32? MridFacilityId
        {
            get { return Fields.MridFacilityId[this]; }
            set { Fields.MridFacilityId[this] = value; }
        }

        [DisplayName("Patient name"), Expression("jMrid.[PatName]")]
        public String MridPatName
        {
            get { return Fields.MridPatName[this]; }
            set { Fields.MridPatName[this] = value; }
        }

        [DisplayName("Mrid Pat Fat Name"), Expression("jMrid.[PatFatName]")]
        public String MridPatFatName
        {
            get { return Fields.MridPatFatName[this]; }
            set { Fields.MridPatFatName[this] = value; }
        }

        [DisplayName("Relation"), Expression("jRelation.[RelationName]")]
        public String RelationTypeName
        {
            get { return Fields.RelationTypeName[this]; }
            set { Fields.RelationTypeName[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public DateTimeField LastUpdatedField
        {
            get { return Fields.LastUpdated; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.PatNoKid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NoKNameD; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPatientNextOfKeenRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field PatNoKid;

            public StringField NoKNameD;

            public Int64Field Mrid;

            public StringField NoKPhone;

            public Int32Field NoKRelationType;

            public StringField NoKAdd;

            public DateTimeField LastUpdated;

            public StringField UserName;

            public Int32Field TenantId;



            public Int32Field MridFacilityId;

            public StringField MridPatName;

            public StringField MridPatFatName;

            public StringField RelationTypeName;
            public StringField MRN;
		}
    }
}
