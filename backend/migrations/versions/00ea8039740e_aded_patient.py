"""aded patient

Revision ID: 00ea8039740e
Revises: 59115b874b67
Create Date: 2022-08-05 19:12:31.840305

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00ea8039740e'
down_revision = '59115b874b67'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table('patients', 
    sa.Column('id', sa.CHAR(32), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('patronymic', sa.String(length=50), nullable=True),
    sa.Column('birthday', sa.String(length=1000), nullable=True),
    sa.Column('consultations', sa.String(length=1000), nullable=True),
    sa.Column('diagnosis', sa.String(length=1000), nullable=True),
    sa.Column('operations', sa.String(length=1000), nullable=True),
    sa.Column('doctor', sa.CHAR(32), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
      op.drop_table('patients')
