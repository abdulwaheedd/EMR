
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblRelation]")]
    [DisplayName("Relations"), InstanceName("Relation")]
    [ReadPermission(PermissionKeys.TblRelation.View)]
    [ModifyPermission(PermissionKeys.TblRelation.Update)]
    [InsertPermission(PermissionKeys.TblRelation.Insert)]
    [DeletePermission(PermissionKeys.TblRelation.Delete)]
    [LookupScript("Configs.TblRelation")]
    public sealed class TblRelationRow : Row, IIdRow, INameRow
    {

        [DisplayName("Relation Id"), Column("RelationID"), Identity]
        public Int32? RelationId
        {
            get { return Fields.RelationId[this]; }
            set { Fields.RelationId[this] = value; }
        }

        [DisplayName("Relation Name (Dari)"), Size(255), NotNull, QuickSearch]
        public String RelationName
        {
            get { return Fields.RelationName[this]; }
            set { Fields.RelationName[this] = value; }
        }

        [DisplayName("Relation Name (English)"), Size(255), NotNull, QuickSearch]
        public String RelationNameEng
        {
            get { return Fields.RelationNameEng[this]; }
            set { Fields.RelationNameEng[this] = value; }
        }
        
        [DisplayName("Relation Name"),Expression("t0.[RelationNameEng]+' - '+t0.[RelationName]"), QuickSearch]
        public String Relation
        {
            get { return Fields.Relation[this]; }
            set { Fields.Relation[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.RelationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Relation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblRelationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field RelationId;

            public StringField RelationName;

            public StringField RelationNameEng;
            public StringField Relation;

		}
    }
}
